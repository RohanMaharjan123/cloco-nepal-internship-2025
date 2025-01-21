# Task

## Task Overview

- Lists top 5 resource-heavy processes
- Runs automatically every 5 minutes using cron
- Saves results to a log file

## To Execute this taskfile

Run following commands:

```bash
    crontab -e
```

Then Add following line to your cron tab:

```bash
    * * * * * [path_to_file]
```

```bash
* * * * *
| | | | |
| | | | +--- Day of week (1 - 7) (Sunday = 7 or 0)
| | | +----- Month (1 - 12)
| | +------- Day of month (1 - 31)
| +--------- Hour (0 - 23)
+----------- Minute (0 - 59)
```

To list the details of a cronjob, run following command:

```bash
    crontab -l
```

Execute the script file.

```bash
    chmod +x crontask.sh
```

Run the Script file.

```bash
    ./crontask.sh
```

Viewing the log file for output.

```bash
    cat crontask.log
```

To open the script file in a text editor, run following command:

```bash
    nano crontask.sh
```

or

```bash
    vim crontask.sh
```

After updating the file and crontab the time shall be fixed to 5 minutes every day instead of running command

```bash
    ./crontask.sh
```
