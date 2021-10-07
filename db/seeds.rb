# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Trainers..."

Trainer.create(name: Faker::Name.unique.name, email: "faketrainer@gmail.com", location: "Upper East Side, NYC", bio: "I pick things up and I put them down.", profile_img: "https://www.texasfamilyfitness.com/hs-fs/hubfs/personal%20trainer%20featured.jpg?width=600&name=personal%20trainer%20featured.jpg", taking_new_clients: true, user_type: "trainer", password: "1234")
Trainer.create(name: Faker::Name.unique.name, email: "johnapple@gmail.com", location: "Gramercy, NYC", bio: "When people get buff, I am get happy.", profile_img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Arnold_Schwarzenegger_1974.jpg", taking_new_clients: true, user_type: "trainer", password: "1234")

puts "Seeding Clients..."

Client.create(name: Faker::Name.unique.name, email: "fake@gmail.com", bio: "I wish to learn how to pick things up and put them down.", profile_img: "https://www.bainbridgedecaturga.com/wp-content/uploads/2019/05/generic-person-icon-1.png", user_type: "client", password: "1234")
Client.create(name: Faker::Name.unique.name, email: "fakeclient@gmail.com", bio: "Here to get myself back into shape.", profile_img: "https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg", user_type: "client", password: "1234")
Client.create(name: Faker::Name.unique.name, email: "fake@fake.com", bio: "Gotta get that beach bod.", profile_img: "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", user_type: "client", password: "1234")

puts "Seeding Reviews/Ratings..."

ReviewRating.create(client_id: 1, trainer_id: 1, review: "Does a great job catering to my needs.", rating: 5)
ReviewRating.create(client_id: 1, trainer_id: 2, review: "Good exercises, but doesn't care about my goals.", rating: 3)
ReviewRating.create(client_id: 2, trainer_id: 1, review: "Very helpful!", rating: 4)
ReviewRating.create(client_id: 3, trainer_id: 2, review: Faker::Quotes::Shakespeare.hamlet_quote, rating: 2)

puts "Seeding Exercises..."

Exercise.create(name: "Squat", description: "Keeping your back straight and your feet flat on the ground, bend your knees and stand back up.", difficulty: 2, video: nil, trainer_id: 1)
Exercise.create(name: "Push-up", description: "From a plank position, bend your arms and push back up.", difficulty: 1, video: nil, trainer_id: 1)
Exercise.create(name: "Crunches", description: "Start with your back on the ground and your kneeds pointed up, lift your upper-body and release back to the ground.", difficulty: 1, video: nil, trainer_id: 1)
Exercise.create(name: "Run", description: "As simple as it sounds, just go for a run.", difficulty: 1, video: nil, trainer_id: 2)

puts "Seeding Appointments..."

Appointment.create(date: nil, location: "Carl Shurtz Park", price: 15, level: 2, duration: 60, capacity: 20, date: Time.new(2021, 10, 21, 14), trainer_id: 1)
Appointment.create(date: nil, location: "Central Park", price: 20, level: 3, duration: 45, capacity: 50, date: Time.new(2021, 10, 22, 16), trainer_id: 2)

puts "Done Seeding"