# 1) Build stage (not strictly needed for pure static, but future-proof)
FROM node:20-alpine AS build
WORKDIR /app
# If you had a build step (e.g., bundlers), run it here.
# For now, just copy static files into /dist
COPY index.html styles.css app.js ./ 
RUN mkdir -p dist && cp index.html styles.css app.js dist/

# 2) Runtime stage (Nginx serves static files)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Expose is informational; the runtime typically uses 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
