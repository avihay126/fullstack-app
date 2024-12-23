# Use the official Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend source code
COPY . .

# Expose the port your app runs on (change 8000 if necessary)
EXPOSE 8000

# Set the default command to run your application
CMD ["python", "app.py"]  # Change `app.py` to the entry point of your backend app
