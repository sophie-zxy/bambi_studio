#!/bin/bash

# 100MB in bytes
max_size=$((100 * 1024 * 1024))

convert_file() {
  file="$1"
  base_name="${file%.*}"
  output_file="${base_name}.webp"
  
  eval $(ffprobe -v error -of flat=s=_ -select_streams v:0 -show_entries stream=r_frame_rate,width,height "$file")
  
  fps=$(bc <<< "scale=2; ${streams_stream_0_r_frame_rate%/*} / ${streams_stream_0_r_frame_rate#*/}")
  fps=$(bc <<< "if ($fps > 10) 10 else $fps")
  
  scale_factor=1
  while true; do
    ffmpeg -y -i "$file" -vf "fps=$fps,scale=iw*$scale_factor:ih*$scale_factor:flags=lanczos" -vcodec libwebp -lossless 0 -compression_level 6 -q:v 70 -preset default "$output_file"
    
    # Check the file size
    file_size=$(stat -c%s "$output_file" || echo 0)

    # Ensure that file_size is a number. If not, assign it a value of 0
    [[ "$file_size" =~ ^[0-9]+$ ]] || file_size=0

    # Debug messages
    echo "File size: $file_size bytes"
    echo "Max size: $max_size bytes"
    echo "Scale factor: $scale_factor"

    if [ "$file_size" -le "$max_size" ] || [ "$(bc <<< "$scale_factor < 0.1")" -eq 1 ] ; then
        if [ "$(bc <<< "$scale_factor < 0.1")" -eq 1 ]; then
            echo "Exiting loop because scale factor is too low"
        fi
        break
    fi
    
    scale_factor=$(bc <<< "$scale_factor * 0.9")
  done
}

if [ "$#" -eq 1 ]; then
  convert_file "$1"
else
  for file in *.mp4; do
    convert_file "$file"
  done
fi
