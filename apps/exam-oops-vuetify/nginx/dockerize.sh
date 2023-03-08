# 경로 수정 필요 
BUILD_PATH=~/workspace/msa_maker/msa_maker_v2/frontend/dist
NGINX_CONF_PATH=~/workspace/msa_maker/msa_maker_v2/frontend/nginx

docker run -it -d --rm --name nginx-new2 -p 8080:80 \
	-v $BUILD_PATH:/usr/share/nginx/html \
	-v $NGINX_CONF_PATH:/etc/nginx/conf.d/ \
	nginx
