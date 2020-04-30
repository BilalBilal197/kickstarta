# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.delete_all
User.delete_all


Project.create!(
    title: "arts project 1",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 1 - 1',
    days_remaining: 90,
    funded: 55,
)

Project.create!(
    title: "arts project 2",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 1 - 2',
    days_remaining: 79,
    funded: 250,
)

Project.create!(
    title: "arts project 3",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 1 - 3',
    days_remaining: 35,
    funded: 600,
)

Project.create!(
    title: "comic project 1",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 2 - 1',
    days_remaining: 75,
    funded: 800,
)

Project.create!(
    title: "comic project 2",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 2 - 2',
    days_remaining: 50,
    funded: 100,
)

Project.create!(
    title: "comic project 3",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 2 - 3',
    days_remaining: 70,
    funded: 1600,
)

Project.create!(
    title: "design project 1",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 3 - 1',
    days_remaining: 25,
    funded: 1500,
)

Project.create!(
    title: "design project 2",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 3 - 2',
    days_remaining: 35,
    funded: 200,
)

Project.create!(
    title: "design project 3",
    picture_url: 'https://pixabay.com/illustrations/deer-polygons-art-design-graphic-3275594/',
    description: 'description 3 - 3',
    days_remaining: 60,
    funded: 1200,
)