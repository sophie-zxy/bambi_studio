#!/bin/bash

# chmod +x convertToWebM.sh

# Array of extensions
extensions=("png" "jpg" "jpeg" "gif" "HEIC")

# Loop over each extension
for ext in "${extensions[@]}"; do
    # Loop over each file with the current extension
    for file in *."$ext"; do
        # Check if the file exists to avoid errors
        if [[ -f "$file" ]]; then
            base=$(basename "$file" ".$ext")
            ffmpeg -i "$file" "${base}.webp"
        fi
    done
done
