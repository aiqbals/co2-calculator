- Open ter terminal and go to the local project directory. Install the dependencies by the follwoing command in terminal:

npm install

- To test, wirte in the terminal the follwoing command:

npm run test

- Copy and paste the follwing command in the terminal to see the total amount of emitted CO2:

node index co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
node index co2-calculator --distance 1800.5 --transportation-method large-petrol-car
node index co2-calculator --transportation-method train --distance 14500 --unit-of-distance m
node index co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg
node index co2-calculator --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car
