echo "Pulling changes"
git pull
echo "Stopping joshua-home container"
docker stop joshua-home
echo "Remove existing container"
docker rm joshua-home
echo "Build the new joshua-home-image"
docker build -t root/joshua-home-image .
echo "Running the new joshua-home container"
docker run --name joshua-home--restart always -p 38117:8002 -d root/joshua-home-image
echo ""

echo "Complete"
echo ""