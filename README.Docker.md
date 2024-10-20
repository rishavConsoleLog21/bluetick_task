# Project Setup using Docker Compose

Follow these steps to set up the project on your system using Docker Compose:

1. **Clone the Repository**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Docker and Docker Compose(Ignore If Already Installed)**
    - Ensure Docker is installed on your system. You can download it from [Docker's official website](https://www.docker.com/get-started).
    - Docker Compose is typically included with Docker Desktop. Verify installation by running:
      ```sh
      docker --version
      docker-compose --version
      ```

3. **Build and Start the Containers**
    - Navigate to the directory containing the `docker-compose.yaml` file.
    - Run the following command to build and start the containers:
      ```sh
      docker-compose up --build
      ```

4. **Access the Application**
    - Once the containers are up and running, you can access the application at `http://localhost:<port>` (replace `<port>` with the appropriate port number specified in your `docker-compose.yaml` that is `http://localhost:3000`).

5. **Stopping the Containers**
    - To stop the running containers, use:
      ```sh
      docker-compose down
      ```

6. **Additional Commands**
    - To view the logs of a specific service:
      ```sh
      docker-compose logs <service-name>
      ```
    - To run a command inside a running container:
      ```sh
      docker-compose exec <service-name> <command>
      ```

For more detailed information, refer to the Docker Compose [documentation](https://docs.docker.com/compose/).