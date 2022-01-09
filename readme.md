# nodejs(express) & mysql の Dockerサンプル

### Dockerを動かすサンプル

**bind volume でnginxを起動する方法**

```
docker run -d -p 8081:80 --volume "$(pwd)"/vol_test:/usr/share/nginx/html nginx
```

**docker-compose**

mysqlとnginxを接続しながら起動することができるサンプル

```
docker-compose up
```
