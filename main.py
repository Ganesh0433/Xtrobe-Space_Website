from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import csv
import time

# Set up Selenium WebDriver
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode (no browser UI)
service = Service('path/to/chromedriver')  # Replace with the path to your chromedriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the website
driver.get("https://eyes.nasa.gov/apps/asteroids/#/home")

# Wait for the page to load
try:
    # Wait for the table or specific content to load
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'your-table-class'))  # Replace with the correct class name
    )
except Exception as e:
    print(f"Error waiting for page to load: {e}")
    driver.quit()
    exit()

# Extract data from the table
try:
    # Find the table element
    table = driver.find_element(By.CLASS_NAME, 'your-table-class')  # Replace with the correct class name
    rows = table.find_elements(By.TAG_NAME, 'tr')  # Find all rows in the table

    # Prepare to save data to a CSV file
    with open('asteroids_data.csv', 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        # Write header row (replace with actual column names)
        writer.writerow(["Column1", "Column2", "Column3", "Column4", "Column5"])

        # Loop through rows and extract data
        for row in rows:
            cols = row.find_elements(By.TAG_NAME, 'td')  # Find all columns in the row
            if cols:  # Skip header rows or empty rows
                cols = [col.text.strip() for col in cols]
                writer.writerow(cols)  # Write row to CSV
                print(cols)  # Print row to console

except Exception as e:
    print(f"Error extracting data: {e}")

finally:
    # Close the browser
    driver.quit()