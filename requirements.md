# Software Requirements

## Vision

- Simple and easy, user friendly, interface to order and recieve orders.
- Creates solid communication between client and business.
- Makes the ordering process easier and accessible.

## Scope(In/Out)

### IN - Features

- List each individual topping and make selectable
- Make cooresponding ticket for cook to create pizza based on customers choices
- Allow user to easily add and remove items
- Allow user to review order and submit order

### OUT

- Not be accepting credit card information at this time

## MVP

- Page 1
  - Selectable list of toppings
  - Display of toppings selected in real time
- Page 2
  - Printable ticket for a cook that has an ordered list of toppings to describe pizza
- Stretch Goals
  - Picture of pizza as building in real time
  - Support customer ordering more than one pizza
  - input box for customer comments
  - User ability to create half and half pizza

## Functional Requirements

1. User can create custom pizza
2. User can view selections
3. App can generate ticket for cook

## Data Flow

### Page 1

Page loads, user has list of toppings presented to them, user can select toppings, selected toppings are parsed into a pizza object, upon submission the pizza data is saved into local storage.

### Page 2

locally stored pizza is parced into ticket.
