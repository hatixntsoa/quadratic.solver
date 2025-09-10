#!/bin/bash

# Load functions and banner
source utils/functions.sh
source utils/banner.sh

quadratic_banner
check_installation
handle_exit

port=$(get_free_port)

# Start local PHP server
start_php_server "$port"

# keep running the server until Ctrl+C
wait $php_pid