# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do

Location.destroy_all
Workout.destroy_all
Route.destroy_all
Athlete.destroy_all

# Athletes
toby = Athlete.create(email: "test", fname: "Tobias", lname: "Dundridge", password: "password")

file = open("https://straya-dev.s3-us-west-1.amazonaws.com/GgVp3SrNp8tzPHg86FGWwbZS")

toby.profile_photo.attach(io: file, filename: 'demouser-profile-photo.jpg')

andy = Athlete.create(email: "andy@aa.io", fname: "Andy", lname: "Minucos", password: "password")
holly = Athlete.create(email: "holly@aa.io", fname: "Holly", lname: "Minucos", password: "password")
bart = Athlete.create(email: "bart@aa.io", fname: "Bart", lname: "Simpson", password: "password")
homer = Athlete.create(email: "Homer@aa.io", fname: "Homer", lname: "Simpson", password: "password")
marge = Athlete.create(email: "marge@aa.io", fname: "Marge", lname: "Simpson", password: "password")
lisa = Athlete.create(email: "lisa@aa.io", fname: "Lisa", lname: "Simpson", password: "password")

#Follows
follow1 = Follow.create(follower_id: andy.id, followee_id: toby.id)
follow2 = Follow.create(follower_id: bart.id, followee_id: toby.id)
follow3 = Follow.create(follower_id: holly.id, followee_id: toby.id)
follow4 = Follow.create(follower_id: homer.id, followee_id: toby.id)
follow5 = Follow.create(follower_id: marge.id, followee_id: toby.id)
follow6 = Follow.create(follower_id: lisa.id, followee_id: toby.id)
follow7 = Follow.create(follower_id: toby.id, followee_id: andy.id)
follow8 = Follow.create(follower_id: holly.id, followee_id: andy.id)
follow9 = Follow.create(follower_id: homer.id, followee_id: andy.id)
follow10 = Follow.create(follower_id: marge.id, followee_id: andy.id)
follow11 = Follow.create(follower_id: andy.id, followee_id: holly.id)
follow12 = Follow.create(follower_id: toby.id, followee_id: holly.id)

#Route
route1 = Route.create(title: "My first route", description: "home to astro's", creator_id: toby.id)

#Workouts
workout1 = Workout.create(title: "My first workout", body: "gotta work on that summer bod", workout_type: "run", duration: 1800, distance: 5, athlete_id: toby.id)
workout2 = Workout.create(title: "My second workout", body: "morning walk before work", workout_type: "run", duration: 3627, distance: 12, athlete_id: andy.id)

#Route
route2 = Route.create(title: "My second route", description: "walk to silver towers", creator_id: andy.id)

#Workouts
workout3 = Workout.create(title: "My third workout", body: "summer bod isn't coming so easy", workout_type: "run", duration: 1734, distance: 5, athlete_id: holly.id)
workout4 = Workout.create(title: "My fourth workout", body: "quick trip to the park to see my mates", workout_type: "run", duration: 400, distance: 0.7, athlete_id: toby.id)

#Route
route3 = Route.create(title: "My third route", description: "up to central park", creator_id: holly.id)

#Workouts
workout5 = Workout.create(title: "My fifth workout", body: "nice night for it", workout_type: "run", duration: 1800, distance: 5, athlete_id: andy.id)
workout6 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 1796, distance: 6.1, athlete_id: holly.id)
workout7 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 825, distance: 2.7, athlete_id: toby.id)
workout8 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 4127, distance: 14.1, athlete_id: andy.id)
workout9 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 5398, distance: 21.1, athlete_id: andy.id)
workout10 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 1532, distance: 5, athlete_id: holly.id)
workout11 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 2003, distance: 5, athlete_id: toby.id)
workout12  = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 2500, distance: 10, athlete_id: andy.id)

# Locations
#route 1
r1loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route1.id, ord: 1 )
r1loc2 = Location.create(lat: 40.757917, lng: -73.996762, route_id: route1.id, ord: 2 )
#route 2
r2loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route2.id, ord: 1 )
r2loc2 = Location.create(lat: 40.760688, lng: -74.000101, route_id: route2.id, ord: 2 )
#route 3
r3loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route3.id, ord: 1 )
r3loc2 = Location.create(lat: 40.769781, lng: -73.988073, route_id: route3.id, ord: 2 )
r3loc3 = Location.create(lat: 40.767408, lng: -73.982420, route_id: route3.id, ord: 3 )
r3loc4 = Location.create(lat: 40.768187, lng: -73.981368, route_id: route3.id, ord: 4 )

end