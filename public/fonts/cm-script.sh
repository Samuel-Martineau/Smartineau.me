for file in ./*.ttf; do
  otfinfo --info $file | awk '/PostScript name/ {print $3}' | xargs -I{} mv $file {}.ttf
done