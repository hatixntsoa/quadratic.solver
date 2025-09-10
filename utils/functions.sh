#!/bin/bash

# Load colors
source utils/colors.sh

# Check if php is installed
function check_php {
  if ! command -v php &>/dev/null; then
    printf "${BOLD}${WHITE}[${RED}x${WHITE}]${RESET} Please install php\n"
    exit 0
  fi
}

# Check binaries
function check_installation {
  check_php
}

# Handle exit gracefully
function handle_exit {
  # Disable Ctrl+C (^C) character display
  stty -echoctl

  # Trap Ctrl+C (SIGINT) to kill background processes and exit cleanly
  trap "echo;\
    printf '${BOLD}${WHITE}[${RED}*${WHITE}]${RESET} Shutting down\n';\
    kill $php_pid 2>/dev/null;\
    exit 0\
  " INT
}

# Check if a port is free
function is_port_free {
  ! lsof -i :$1 >/dev/null 2>&1
}

# Generate a random 4-digit free port
function get_free_port {
  while true; do
    port=$((RANDOM % 5999 + 4001))
    if is_port_free "$port"; then
      echo "$port"
      return
    fi
  done
}

# Start PHP server and log output to file
function start_php_server {
  php -S 0.0.0.0:$1 > /dev/null 2>&1 &
  php_pid=$!
  printf "${BOLD}${WHITE}[${GREEN}+${WHITE}]${RESET} Server started on port ${YELLOW}$1${RESET}\n"
  printf "${BOLD}${WHITE}[${BLUE}*${WHITE}]${RESET} Local URL : ${BLUE}http://localhost:$1${RESET}\n\n"
}