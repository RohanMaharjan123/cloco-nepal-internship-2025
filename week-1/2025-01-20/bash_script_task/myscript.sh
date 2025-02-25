#!/bin/bash

# Task 1: Directory Management
project_dir="/Users/$(whoami)/project_files"
echo "Creating directory $project_dir..."
mkdir -p $project_dir

# Task 2: User and Group Management
#Directory Service command line utility(dscl)
echo "======================================="
echo "Creating group 'developers'..."
sudo dscl . -create /Groups/developers

echo "Creating user 'intern_user'..."
sudo dscl . -create /Users/intern_user
echo "======================================="

# Task 3: Permissions and Ownership
echo "Changing ownership of $project_dir "
sudo chown -v intern_user $project_dir
sudo chgrp -v developers $project_dir
echo "======================================="

# Task 4: Additional Tasks
welcome_file="$project_dir/welcome.txt"
echo "Creating welcome file at $welcome_file..."
{
    echo "Creation date and time: $(date)"
    echo "Directory path: $project_dir"
    echo "Owner: intern_user"
    echo "Group: developers"
} > $welcome_file

chmod 640 $welcome_file

#1. Owner (6) → 110 → rw-
#The first digit (6) gives the owner read (r) and write (w) permissions but not execute (x).
#2. Group (4) → 100 → r--
#The second digit (4) gives the group read (r) permission only.
#3.Others (0) → 000 → ---
#The third digit (0) gives others no permissions.
echo "======================================="

# Task 5: Verification
echo "Verifying tasks..."

echo "Directory Information:"
ls -ld $project_dir

echo -e "\nUser Information:"
id intern_user

echo -e "\nWelcome File Contents:"
cat $welcome_file

echo -e "\nWelcome File Permissions:"
ls -l "$welcome_file"

echo -e "\nScript execution completed successfully!"

echo "======================================="
