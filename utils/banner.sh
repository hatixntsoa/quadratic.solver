#!/bin/bash

# Load colors
source utils/colors.sh

clear

function quadratic_banner {
  local github_link='https://github.com/hatixntsoa'
  local link_start="\033]8;;${github_link}\033\\"
  local link_end='\033]8;;\033\\'

  printf "${BOLD}${WHITE}"
  printf "                       _           _   _\n"
  printf "  __ _ _   _  __ _  __| |_ __ __ _| |_(_) ___\n"
  printf " / _\` | | | |/ _\` |/ _\` | '__/ _\` | __| |/ __|\n"
  printf "| (_| | |_| | (_| | (_| | | | (_| | |_| | (__\n"
  printf " \\__, |\\__,_|\\__,_|\\__,_|_|  \\__,_|\\__|_|\\___|\n"
  printf "    |_|                            ${RESET}${BLUE}${link_start}@hatixntsoa${link_end}${RESET}\n\n"

  printf "${BOLD}${WHITE}[${BLUE}?${WHITE}]${RESET} Press ${WHITE}Ctrl+C${RESET} to stop\n\n"
}