#!/usr/bin/env bash
# Build the LaTeX CV and publish it to assets/pdf/ for the website.
# Requires macOS system fonts (Times New Roman, Wingdings) and xelatex.
set -e

# Step 1: compile in this folder
cd "$(dirname "$0")"
xelatex -interaction=nonstopmode -halt-on-error haodong_chen_cv.tex > /dev/null

# Step 2: copy the PDF to the path used by _pages/cv.md and _data/socials.yml
cp haodong_chen_cv.pdf ../assets/pdf/haodong_chen_cv.pdf

# Step 3: remove build artefacts
rm -f haodong_chen_cv.aux haodong_chen_cv.log haodong_chen_cv.out haodong_chen_cv.pdf

echo "CV built: assets/pdf/haodong_chen_cv.pdf"
