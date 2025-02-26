FROM alpine:latest

# Install necessary dependencies
RUN apk update && apk add --no-cache \
    nginx \
    nginx-mod-http-fancyindex \
    wget \
    unzip \
    tzdata \
    && rm -rf /var/cache/apk/*

# Configure timezone
ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create necessary directories
RUN mkdir -p /var/www/html

# Download the official release of the Nginxy project
RUN wget -q https://github.com/lfelipe1501/Nginxy/releases/download/v2/nginxy.zip -O /tmp/nginxy.zip \
    && unzip -q /tmp/nginxy.zip -d /tmp \
    && mkdir -p /var/www/html/.nginxy \
    && cp -r /tmp/.nginxy/* /var/www/html/.nginxy/ \
    && rm -rf /tmp/nginxy.zip /tmp/.nginxy

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