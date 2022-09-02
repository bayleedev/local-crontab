## Yubikey Eject Detection


Add this to your cronjob (`crontab -e`)

```
* * * * * cd ~/projects/metrics && ./start.sh >/tmp/stdout.log 2>/tmp/stderr.log
```


## Debugging

From this directory run:

```
tail -f /tmp/*.log logs/*
```
