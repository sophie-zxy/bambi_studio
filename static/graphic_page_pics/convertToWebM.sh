#!/bin/bash

for file in *.jpg; do
  base=$(basename "$file" .jpg)
  ffmpeg -i "$file" "${base}.webp"
done