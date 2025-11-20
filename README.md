# Efiwe Scripts
##### **By Harihar Nautiyal**

This repository contains a collection of JavaScript and Python scripts for exploiting efiwe.com platform.

## Scripts

### JavaScript Scripts

These scripts are intended to be executed from the browser's developer console on efiwe.com.

*   **`change-username.js`**: Modifies the current user's username.
    *   **Usage**: `changeUsername('NewUsername')`

*   **`delete-user.js`**: Deletes the current user's account data.
    *   **Usage**: `deleteMyUser()`

*   **`set-points.js`**: Sets the current user's points to a specified value.
    *   **Usage**: `setPoints(1000)`

*   **`single-pulsar.js`**: Automates the completion of coding challenges.
    *   **Usage**: `startAutomation()` to start, `stopAutomation()` to stop.

### Python Script

*   **`exploit.py`**: A Python script that automates logging in and completing all challenges.

**Prerequisites:**

*   Python 3.x
*   Playwright

**Setup:**

1.  Install Python dependencies:
    ```bash
    pip install playwright
    playwright install
    ```

**Execution:**

1.  Run the script from your terminal:
    ```bash
    python exploit.py
    ```
2.  Enter your efiwe.com credentials when prompted.

## Disclaimer

These scripts are provided for educational and testing purposes only. The user assumes all responsibility for any consequences of using these scripts.
