#!/bin/bash

#Log file
LOG_FILE=/Users/rohanmaharjan/crontask.log

#Time 
echo "Timestamp: $(date)" >> "$LOG_FILE"

#Displaying the processes
ps -e -o pid,ppid,comm,%mem,%cpu | sort -nrk 5 | head -n 5 >> "$LOG_FILE"

#seperating processes by echo command to make them easier to read
echo ".............................................................." >> "$LOG_FILE"