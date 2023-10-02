#!/bin/bash

for file in *.png; do
  base=$(basename "$file" .png)
  ffmpeg -i "$file" "${base}.webp"
done