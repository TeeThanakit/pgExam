// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table members {
  memberId int [primary key]
  firstName varchar
  lastName varchar
  email varchar
  phoneNumber varchar
  registeredDate datetime
  memberType int [ref: - member_type.id]
}

Table general_public {
  id integer [primary key, ref: > members.memberId]
  idCard varchar
  DOB date
}

Table student {
  id integer [primary key, ref: > members.memberId]
  education varchar
  studentId varchar
  img image
  expiredDate date
  DOB date
}

Table shop {
  id integer [primary key, ref: > members.memberId]
  businessName varchar
  registrationNumber varchar
  document file
}

Table member_type {
  id integer [primary key]
  memberType varchar
}

Table book {
  id integer [primary key]
  image image
  price float
  bookType int [ref: - book_type.bookType]
  quantity int
}

Table book_type {
  id integer [primary key]
  bookType varchar
}

Table order {
  id string [primary key]
  memberId int [ref: > members.memberId]
  customerType int
  orderedDate date
}

Table order_details {
  id integer [primary key]
  orderId string [ref: - order.id]
  bookId int [ref: < book.id]
  quantity int
  totalPrice float
}