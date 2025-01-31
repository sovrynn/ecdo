#!/bin/bash

# --------------------------------------------------------------------------------
# Script Name: open_multiple_terminals.sh
# Description: Opens 20 new terminal windows, each executing a specified command.
# Usage: ./open_multiple_terminals.sh "your_command_here"
# Example: ./open_multiple_terminals.sh "bash -c 'echo Hello World; exec bash'"
# --------------------------------------------------------------------------------

# Number of terminals to open
NUM_TERMINALS=2

# Check if a command was provided as an argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 \"command_to_run\""
    echo "Example: $0 \"bash -c 'echo Hello World; exec bash'\""
    exit 1
fi

# The command to execute in each terminal
COMMAND="$1"

# Function to open a new terminal and run the command
open_terminal() {
    gnome-terminal -- bash -c "$COMMAND; exec bash"
}

# Loop to open the specified number of terminals
for ((i=1; i<=NUM_TERMINALS; i++)); do
    open_terminal &
    # Optional: Slight delay to prevent overwhelming the system
    sleep 0.1
done

echo "Opened $NUM_TERMINALS terminals running the specified command."

