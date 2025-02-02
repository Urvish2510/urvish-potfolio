"use client";
import { useState } from "react";

export default function I20Page() {
  const [activeParagraph, setActiveParagraph] = useState(null);

  const handleButtonClick = (paragraph) => {
    if (paragraph === activeParagraph) {
      setActiveParagraph(null);
      return;
    }
    setActiveParagraph(paragraph);
  };

  return (
    <div className="font-sans p-5 mx-auto text-center">
      {/* Button Container */}
      <div className="mb-6 space-x-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => handleButtonClick("UI")}
        >
          UI
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          onClick={() => handleButtonClick("LI")}
        >
          LI
        </button>
        <button
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          onClick={() => handleButtonClick("JI")}
        >
          JI
        </button>
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          onClick={() => handleButtonClick("SL")}
        >
          SL
        </button>
      </div>

      {/* Content Container */}
      <div className="mt-6 p-6 rounded-lg shadow-md">
        {activeParagraph === "UI" && (
          <div className="text-blue-600 font-semibold">
            <div className="pb-20">
              {`Register:
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underwriter Registration</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <div class="registration-container">
        <h2>StarProtect Insurance Portal</h2>
        <hr>
        <h3>UNDERWRITER REGISTRATION</h3>
        <form id="register-form">
            <div class="form-group">
                <label>ID:</label>
                <span id="underwriterId"></span>
            </div>

            <div class="form-group">
                <label for="name">Name<span>*</span></label>
                <input type="text" id="name" required>
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth<span>*</span></label>
                <input type="date" id="dob" required>
            </div>

            <div class="form-group">
                <label for="joiningDate">Joining Date<span>*</span></label>
                <input type="date" id="joiningDate" required>
            </div>

            <div class="form-group">
                <label>Default Password:</label>
                <span id="defaultPassword"></span>
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>

---------------------------------------------------------------
body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.registration-container {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 400px;
}

h2 {
    text-align: center;
    color: #3E7B27;
    margin-bottom: 5px;
}

hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin-bottom: 10px;
}

h3 {
    text-align: center;
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

label {
    font-weight: bold;
    color: #555;
    flex: 1;
    text-align: left;
}

label span {
    color: red;
}

input {
    flex: 2;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

span {
    font-weight: bold;
    color: #123524;
    flex: 2;
}

button {
    background: #3E7B27;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #85A947;
}

---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("underwriterId").innerText = generateRandomId();
    document.getElementById("defaultPassword").innerText = generateRandomPassword();
});

function generateRandomId() {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
}

function generateRandomPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Underwriter Registered Successfully!");
});


            `}
            </div>
            <div className="pb-20">
              {`Login:
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insurance Login</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <div class="login-container">
        <h2>StarProtect Insurance Portal</h2>
        <hr>
        <h3>LOGIN</h3>
        <form id="login-form">
            <label for="username">Username<span>*</span></label>
            <input type="text" id="username" required>
            
            <label for="password">Password<span>*</span></label>
            <input type="password" id="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>
---------------------------------------------------------------
body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 330px;
}

h2 {
    color: #3E7B27;
    margin-bottom: 5px;
}

hr {
    border: 0;
    height: 1px;
    background: #ccc;
    margin-bottom: 10px;
}

h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

label span {
    color: red;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
}

button {
    background: #3E7B27;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #85A947;
} 
---------------------------------------------------------------
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login Successful');
    } else {
        alert('Please enter valid credentials');
    }
});

            `}
            </div>
            <div className="pb-20">
              {`Search:
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underwriter Search - QVY Insurance</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>StarProtect Insurance Online</h2>
        <hr>
        <h3>UNDERWRITER SEARCH</h3>
        <form id="search-form">
            <div class="form-group">
                <label for="underwriter-id">UnderWriter ID<span>*</span></label>
                <input type="text" id="underwriter-id" required>
            </div>

            <button type="submit">Search</button>
            <button type="button" onclick="goHome()">Home</button>
        </form>
    </div>

    <script>
        function goHome() {
            window.location.href = 'index.html';
        }
    </script>
</body>
</html>

---------------------------------------------------------------
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    width: 50%;
    background: white;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #3E7B27;
}

hr {
    margin: 10px 0;
    border: 0;
    border-top: 1px solid #ccc;
}

h3 {
    color: #3E7B27;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-right: 10px;
}

span {
    color: red;
}

input {
    width: 70%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100px;
    padding: 8px;
    background-color: #3E7B27;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
}

button:hover {
    background-color: #85A947;
}

---------------------------------------------------------------
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
            `}
            </div>
          </div>
        )}
        {activeParagraph === "LI" && (
          <div className="text-green-600 font-semibold">LI Content</div>
        )}
        {activeParagraph === "JI" && (
          <div className="text-divurple-600 font-semibold">
            <div className="pb-20">
                {`StarProtectVehicle/
├── src/
│   ├── com/
│   │   ├── starprotect/
│   │   │   ├── Main.java
│   │   │   ├── admin/
│   │   │   │   ├── Admin.java
│   │   │   ├── underwriter/
│   │   │   │   ├── UnderWriter.java
│   │   │   ├── vehicle/
│   │   │   │   ├── Vehicle.java
│   │   │   ├── utils/
│   │   │   │   ├── DateUtils.java
├── README.md`}
            </div>
            <div className="pb-20">{`Main.java:
            
            package com.starprotect;

import com.starprotect.admin.Admin;
import com.starprotect.underwriter.UnderWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to Star Protect Vehicle System");
        System.out.println("Please select your role:");
        System.out.println("1. Admin");
        System.out.println("2. UnderWriter");
        int role = scanner.nextInt();

        switch (role) {
            case 1:
                Admin admin = new Admin();
                admin.login();
                break;
            case 2:
                UnderWriter underWriter = new UnderWriter();
                underWriter.login();
                break;
            default:
                System.out.println("Invalid role selected. Exiting...");
                break;
        }
        scanner.close();
    }
}`}</div>
            <div className="pb-20">{`Admin: 
            
            package com.starprotect.admin;

import com.starprotect.underwriter.UnderWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Admin {
    private Map<Integer, UnderWriter> underwriters = new HashMap<>();
    private int nextUnderWriterId = 1;

    public void login() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Admin Login");
        System.out.print("Enter userId: ");
        String userId = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (userId.equals("admin") && password.equals("admin123")) {
            System.out.println("Login successful!");
            showMenu();
        } else {
            System.out.println("Invalid credentials. Exiting...");
        }
    }

    private void showMenu() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Admin Menu:");
            System.out.println("1. Register UnderWriter");
            System.out.println("2. Search UnderWriter by Id");
            System.out.println("3. Update UnderWriter Password");
            System.out.println("4. Delete UnderWriter by Id");
            System.out.println("5. View All UnderWriters");
            System.out.println("6. View All Vehicles by UnderWriter Id");
            System.out.println("7. Exit");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    registerUnderWriter();
                    break;
                case 2:
                    searchUnderWriterById();
                    break;
                case 3:
                    updateUnderWriterPassword();
                    break;
                case 4:
                    deleteUnderWriterById();
                    break;
                case 5:
                    viewAllUnderWriters();
                    break;
                case 6:
                    viewAllVehiclesByUnderWriterId();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private void registerUnderWriter() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter UnderWriter Name:");
        String name = scanner.nextLine();
        System.out.println("Enter DOB (YYYY-MM-DD):");
        String dob = scanner.nextLine();
        System.out.println("Enter Joining Date (YYYY-MM-DD):");
        String joiningDate = scanner.nextLine();
        System.out.println("Enter Default Password:");
        String defaultPassword = scanner.nextLine();

        UnderWriter underWriter = new UnderWriter(nextUnderWriterId++, name, dob, joiningDate, defaultPassword);
        underwriters.put(underWriter.getUnderWriterId(), underWriter);
        System.out.println("UnderWriter registered successfully!");
    }

    private void searchUnderWriterById() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter UnderWriter Id:");
        int id = scanner.nextInt();
        UnderWriter underWriter = underwriters.get(id);
        if (underWriter != null) {
            System.out.println(underWriter);
        } else {
            System.out.println("Invalid UnderWriter Id");
        }
    }

    private void updateUnderWriterPassword() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter UnderWriter Id:");
        int id = scanner.nextInt();
        UnderWriter underWriter = underwriters.get(id);
        if (underWriter != null) {
            System.out.println("Enter new password:");
            String newPassword = scanner.next();
            underWriter.setPassword(newPassword);
            System.out.println("Password updated successfully!");
        } else {
            System.out.println("Invalid UnderWriter Id");
        }
    }

    private void deleteUnderWriterById() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter UnderWriter Id:");
        int id = scanner.nextInt();
        UnderWriter underWriter = underwriters.remove(id);
        if (underWriter != null) {
            System.out.println("UnderWriter deleted successfully!");
        } else {
            System.out.println("Invalid UnderWriter Id");
        }
    }

    private void viewAllUnderWriters() {
        for (UnderWriter underWriter : underwriters.values()) {
            System.out.println(underWriter);
        }
    }

    private void viewAllVehiclesByUnderWriterId() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter UnderWriter Id:");
        int id = scanner.nextInt();
        UnderWriter underWriter = underwriters.get(id);
        if (underWriter != null) {
            underWriter.viewAllVehicles();
        } else {
            System.out.println("Invalid UnderWriter Id");
        }
    }
}`}</div>
            <div className="pb-20">{`UnderWriter: 
            package com.starprotect.underwriter;

import com.starprotect.vehicle.Vehicle;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class UnderWriter {
    private int underWriterId;
    private String name;
    private String dob;
    private String joiningDate;
    private String password;
    private List<Vehicle> vehicles = new ArrayList<>();

    public UnderWriter(int underWriterId, String name, String dob, String joiningDate, String password) {
        this.underWriterId = underWriterId;
        this.name = name;
        this.dob = dob;
        this.joiningDate = joiningDate;
        this.password = password;
    }

    public int getUnderWriterId() {
        return underWriterId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void login() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("UnderWriter Login");
        System.out.print("Enter userId: ");
        String userId = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (userId.equals(String.valueOf(underWriterId)) && password.equals(this.password)) {
            System.out.println("Login successful!");
            showMenu();
        } else {
            System.out.println("Invalid credentials. Exiting...");
        }
    }

    private void showMenu() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("UnderWriter Menu:");
            System.out.println("1. Create a new Vehicle Insurance");
            System.out.println("2. Renewal of a Policy");
            System.out.println("3. Changing of a policy");
            System.out.println("4. View Policy");
            System.out.println("5. Exit");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    createNewVehicleInsurance();
                    break;
                case 2:
                    renewPolicy();
                    break;
                case 3:
                    changePolicy();
                    break;
                case 4:
                    viewPolicy();
                    break;
                case 5:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private void createNewVehicleInsurance() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter Vehicle No:");
        String vehicleNo = scanner.nextLine();
        System.out.println("Enter Vehicle Type (2-wheeler/4-wheeler):");
        String vehicleType = scanner.nextLine();
        System.out.println("Enter Customer Name:");
        String customerName = scanner.nextLine();
        System.out.println("Enter Engine No:");
        int engineNo = scanner.nextInt();
        System.out.println("Enter Chasis No:");
        int chasisNo = scanner.nextInt();
        System.out.println("Enter Phone No:");
        int phoneNo = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.println("Enter Type (Full Insurance/ThirdParty):");
        String type = scanner.nextLine();
        System.out.println("Enter Premium Amount:");
        double premiumAmt = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        System.out.println("Enter From Date (YYYY-MM-DD):");
        String fromDate = scanner.nextLine();

        Vehicle vehicle = new Vehicle(vehicleNo, vehicleType, customerName, engineNo, chasisNo, phoneNo, type, premiumAmt, fromDate, underWriterId);
        vehicles.add(vehicle);
        System.out.println("Vehicle Insurance created successfully!");
    }

    private void renewPolicy() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter Policy No:");
        int policyNo = scanner.nextInt();
        Vehicle vehicle = findVehicleByPolicyNo(policyNo);
        if (vehicle != null) {
            System.out.println("Policy Details:");
            System.out.println(vehicle);
            System.out.println("Press 'R' to renew the policy.");
            String choice = scanner.next();
            if (choice.equalsIgnoreCase("R")) {
                System.out.println("Enter new premium amount:");
                double newPremiumAmt = scanner.nextDouble();
                vehicle.setPremiumAmt(newPremiumAmt);
                vehicle.setFromDate(java.time.LocalDate.now().toString());
                vehicle.setToDate(java.time.LocalDate.now().plusYears(1).toString());
                System.out.println("Policy renewed successfully!");
            } else {
                System.out.println("Renewal cancelled.");
            }
        } else {
            System.out.println("Invalid Policy No.");
        }
    }

    private void changePolicy() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter Policy No:");
        int policyNo = scanner.nextInt();
        Vehicle vehicle = findVehicleByPolicyNo(policyNo);
        if (vehicle != null) {
            if (vehicle.getType().equalsIgnoreCase("ThirdParty")) {
                System.out.println("Cannot change policy from ThirdParty to Full Insurance.");
            } else {
                System.out.println("Press 'U' to change policy type to ThirdParty.");
                String choice = scanner.next();
                if (choice.equalsIgnoreCase("U")) {
                    vehicle.setType("ThirdParty");
                    System.out.println("Policy type updated successfully!");
                } else {
                    System.out.println("Invalid choice.");
                }
            }
        } else {
            System.out.println("Invalid Policy No.");
        }
    }

    private void viewPolicy() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("View Policy Menu:");
        System.out.println("1. View All Insurance");
        System.out.println("2. View Insurance by Vehicle Id");
        System.out.println("3. View Insurance by Policy Id");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                viewAllVehicles();
                break;
            case 2:
                System.out.println("Enter Vehicle No:");
                String vehicleNo = scanner.next();
                Vehicle vehicleByNo = findVehicleByVehicleNo(vehicleNo);
                if (vehicleByNo != null) {
                    System.out.println(vehicleByNo);
                } else {
                    System.out.println("Invalid Vehicle No.");
                }
                break;
            case 3:
                System.out.println("Enter Policy No:");
                int policyNo = scanner.nextInt();
                Vehicle vehicleByPolicy = findVehicleByPolicyNo(policyNo);
                if (vehicleByPolicy != null) {
                    System.out.println(vehicleByPolicy);
                } else {
                    System.out.println("Invalid Policy No.");
                }
                break;
            default:
                System.out.println("Invalid choice.");
        }
    }

    private Vehicle findVehicleByPolicyNo(int policyNo) {
        for (Vehicle vehicle : vehicles) {
            if (vehicle.getPolicyNo() == policyNo) {
                return vehicle;
            }
        }
        return null;
    }

    private Vehicle findVehicleByVehicleNo(String vehicleNo) {
        for (Vehicle vehicle : vehicles) {
            if (vehicle.getVehicleNo().equals(vehicleNo)) {
                return vehicle;
            }
        }
        return null;
    }

    public void viewAllVehicles() {
        for (Vehicle vehicle : vehicles) {
            System.out.println(vehicle);
        }
    }

    @Override
    public String toString() {
        return "UnderWriter{" +
                "underWriterId=" + underWriterId +
                ", name='" + name + '\'' +
                ", dob='" + dob + '\'' +
                ", joiningDate='" + joiningDate + '\'' +
                '}';
    }
}
            `}</div>
            <div className="pb-20">{`Vehicle: 
                package com.starprotect.vehicle;

public class Vehicle {
    private static int nextPolicyNo = 1;
    private int policyNo;
    private String vehicleNo;
    private String vehicleType;
    private String customerName;
    private int engineNo;
    private int chasisNo;
    private int phoneNo;
    private String type;
    private double premiumAmt;
    private String fromDate;
    private String toDate;
    private int underWriterId;

    public Vehicle(String vehicleNo, String vehicleType, String customerName, int engineNo, int chasisNo, int phoneNo, String type, double premiumAmt, String fromDate, int underWriterId) {
        this.policyNo = nextPolicyNo++;
        this.vehicleNo = vehicleNo;
        this.vehicleType = vehicleType;
        this.customerName = customerName;
        this.engineNo = engineNo;
        this.chasisNo = chasisNo;
        this.phoneNo = phoneNo;
        this.type = type;
        this.premiumAmt = premiumAmt;
        this.fromDate = fromDate;
        this.toDate = java.time.LocalDate.parse(fromDate).plusYears(1).toString();
        this.underWriterId = underWriterId;
    }

    public int getPolicyNo() {
        return policyNo;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPremiumAmt() {
        return premiumAmt;
    }

    public void setPremiumAmt(double premiumAmt) {
        this.premiumAmt = premiumAmt;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "policyNo=" + policyNo +
                ", vehicleNo='" + vehicleNo + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                ", customerName='" + customerName + '\'' +
                ", engineNo=" + engineNo +
                ", chasisNo=" + chasisNo +
                ", phoneNo=" + phoneNo +
                ", type='" + type + '\'' +
                ", premiumAmt=" + premiumAmt +
                ", fromDate='" + fromDate + '\'' +
                ", toDate='" + toDate + '\'' +
                ", underWriterId=" + underWriterId +
                '}';
    }
}
            `}</div>
            <div className="pb-20">{``}</div>
            <div className="pb-20">{``}</div>
            <div className="pb-20">{``}</div>
            <div className="pb-20">{``}</div>
            <div className="pb-20">{``}</div>
          </div>
        )}
        {activeParagraph === "SL" && (
          <div className="text-red-600 font-semibold">
            <div className="pb-20">{`CREATE TABLE Underwriter ( 
    UnderwriterId NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
    Name VARCHAR2(100) NOT NULL, 
    DOB DATE NOT NULL, 
    JoiningDate DATE NOT NULL, 
    DefaultPassword VARCHAR2(100) NOT NULL 
);`}</div>
            <div className="pb-20">{`INSERT INTO Underwriter (Name, DOB, JoiningDate, DefaultPassword) 
VALUES ('Urvish', TO_DATE('2000-05-15', 'YYYY-MM-DD'), TO_DATE('2020-01-01', 'YYYY-MM-DD'), 'Password123');`}</div>
            <div className="pb-20">{`INSERT INTO Underwriter (Name, DOB, JoiningDate, DefaultPassword) 
VALUES ('Patel', TO_DATE('2002-10-22', 'YYYY-MM-DD'), TO_DATE('2022-06-15', 'YYYY-MM-DD'), 'SecurePass456');`}</div>
            <div className="pb-20">{`CREATE TABLE Insurance ( 
    PolicyNo NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
    VehicleNo VARCHAR2(20) NOT NULL, 
    VehicleType VARCHAR2(50) NOT NULL, 
    CustomerName VARCHAR2(100) NOT NULL, 
    EngineNo NUMBER NOT NULL, 
    ChasisNo NUMBER NOT NULL, 
    PhoneNo NUMBER NOT NULL, 
    Type VARCHAR2(50) NOT NULL, 
    PremiumAmt NUMBER(10, 2) NOT NULL, 
    FromDate DATE NOT NULL, 
    ToDate DATE NOT NULL, 
    UnderwriterId NUMBER, 
    CONSTRAINT fk_underwriter FOREIGN KEY (UnderwriterId) REFERENCES Underwriter(UnderwriterId) 
);`}</div>
            <div className="pb-20">{`INSERT INTO Insurance (VehicleNo, VehicleType, CustomerName, EngineNo, ChasisNo, PhoneNo, Type, PremiumAmt, FromDate, ToDate, UnderwriterId) 
VALUES ('GJ18AA1234', '4-wheeler', 'Alice Brown', 123456, 654321, 1234567890, 'Full Insurance', 5000.00, TO_DATE('2023-01-01', 'YYYY-MM-DD'), TO_DATE('2024-01-01', 'YYYY-MM-DD'), 1);`}</div>
            <div className="pb-20">{`INSERT INTO Insurance (VehicleNo, VehicleType, CustomerName, EngineNo, ChasisNo, PhoneNo, Type, PremiumAmt, FromDate, ToDate, UnderwriterId) 
VALUES ('GJ01BB5678', '2-wheeler', 'Bob Green', 987654, 321654, 9876543210, 'ThirdParty', 2000.00, TO_DATE('2023-02-15', 'YYYY-MM-DD'), TO_DATE('2024-02-15', 'YYYY-MM-DD'), 1);`}</div>
            <div className="pb-20">{`INSERT INTO Insurance (VehicleNo, VehicleType, CustomerName, EngineNo, ChasisNo, PhoneNo, Type, PremiumAmt, FromDate, ToDate, UnderwriterId) 
VALUES ('GJ02BB9101', '4-wheeler', 'Charlie White', 112233, 445566, 1122334455, 'Full Insurance', 6000.00, TO_DATE('2023-03-10', 'YYYY-MM-DD'), TO_DATE('2024-03-10', 'YYYY-MM-DD'), 2);`}</div>
            <div className="pb-20">{`INSERT INTO Insurance (VehicleNo, VehicleType, CustomerName, EngineNo, ChasisNo, PhoneNo, Type, PremiumAmt, FromDate, ToDate, UnderwriterId) 
VALUES ('GJ18AA1121', '2-wheeler', 'Diana Black', 778899, 998877, 9988776655, 'ThirdParty', 2500.00, TO_DATE('2023-04-20', 'YYYY-MM-DD'), TO_DATE('2024-04-20', 'YYYY-MM-DD'), 2);`}</div>
            <div className="pb-20">{`SELECT  
    VehicleNo,  
    VehicleType,  
    CustomerName,  
    EngineNo,  
    ChasisNo,  
    PhoneNo,  
    Type,  
    PremiumAmt,  
    FromDate,  
    ToDate,  
    UnderwriterId 
FROM Insurance 
WHERE PolicyNo = 1;`}</div>
            <div className="pb-20">{`SELECT  
    UnderwriterId,  
    COUNT(PolicyNo) AS NumberOfVehiclesRegistered 
FROM Insurance 
GROUP BY UnderwriterId;`}</div>
            <div className="pb-20">{`SELECT  
    PolicyNo,  
    VehicleNo,  
    VehicleType,  
    CustomerName,  
    EngineNo,  
    ChasisNo,  
    PhoneNo,  
    Type,  
    PremiumAmt,  
    FromDate,  
    ToDate,  
    UnderwriterId 
FROM Insurance 
WHERE ToDate < SYSDATE;`}</div>
            <div className="pb-20">{`DELETE FROM Underwriter 
WHERE UnderwriterId = 1;`}</div>
          </div>
        )}
      </div>
    </div>
  );
}
