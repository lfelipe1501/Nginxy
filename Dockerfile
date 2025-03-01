FROM alpine:latest

LABEL maintainer="Luis Felipe Sanchez <lfelipe1501@gmail.com>"

# Install necessary dependencies
RUN apk update && apk add --no-cache \
    nginx nginx-mod-http-fancyindex \
    tzdata \
    && rm -rf /var/cache/apk/*

# Configure timezone
ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy local Nginxy theme files
COPY Nginxy-Theme /var/www/html/.nginxy

# Copy Nginx configuration
COPY test/ngx-template.conf /etc/nginx/http.d/default.conf

# Copy example files
COPY test/files/ /var/www/html/files/

# Ensure correct permissions
RUN chown -R nginx:nginx /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80

# Verify Nginx configuration
RUN nginx -t

# Command to start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"] 
