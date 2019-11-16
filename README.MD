# Soul Coach

## Overview 

Soul Coach is a public service, that helps you to connect with your religion leader. It wouuld be extremely useful for expats, people on frequent business trips, people in military service, and other people far from home community. This would allow spiritual leaders to utilize digital channel to share information within the community as well as support every individual, whenever there is a need.
This service is intended to erase the borders for people all around the globe and would allow them to be a part of the community, even if they are forced to relocate for some specific reason


## Technology

This service is built taking in consideration possible rapid growth of user base. Application itself is completely cloud-ready, actually it is even deployed on Azure.
For the frontend React was chosen for it's lightweight nature, and possibility to easily enable PWA support ( Future improvement )
Backend is built using NestJS, for the sake of speed, ease of development, maintainability and posibility to scale as far as Cloud physical resources are allowing
Data Layer is built using TypeORM with connection to AzureDB with MySQL flavor. Yes, it is stable, scales quite well and it is possible to easily switch to any other relation DB
And a cherry on the top is GraphQL, that allows to build the interface between Fronend and Backend and make it so smooth and easy, that developers are crying out of happiness

## Installation

TBD

## Usage

During the Hackathon Soul COach team agreed to implement the following scope:

- *Soul Coach Stream* - Service that allows Religious leaders to livestream their religious events globally. This service is intended for providing content to the whole community. Records of the streams as well as uploaded video recordings will be available for the community. People will be able to join, view, chat and donate to stream organiser and his Church.

- *Soul Coach Link* - Service that allow to individually connect with a spiritual leader and ask his support, when one in need. This service would allow to schedule meetings, provide video one-to-one videocalls, audiocalls and chat possibilities. Filters ( religion, possible languages, regions, reviews ) would be available. Donations to religious leader are possible from within the chat window, or during the meeting review process

- *Toll-4-Troll* - As we are talking about extremely sensitive topics - mental health and religion, Soul Coach assume that there might be some people getting satisfaction from "trolling" other. To resolve this issue Toll-4-Troll service will be introduced. It is a service intended to protect Soul COach application from user misbehaviour. When Customer registers he would enter credit-card details to authenticate himself. In User Terms and Conditions there will be a point, if customer is misbehaving, and actively offending other users or communities, he would be able to receive following penalties, based on severity and frequency of offenses:
 - Temporary ban to chat on streams
 - Temporary ban schedule meetings with spiritual leaders
 - *Forceful monetary toll*, that will be registered as a donation for the Community, that was offended
 -  Permanent ban

It is worthy to mention, that all the donations will be made to the campaigns, organised by the community leaders. 
E.g. Donation campaign for new computer class for orphanage in user's home town.

It is planned as a future improvement, that donations made within the system will be automatically exported to according country's tax authorities to allow automatic tax refunds at the end of the year. As well it would bring extra visibility to all the donations made to communities across the world.


## Team

- Marija Zlotnikova
- Peteris Arajs
- Artjoms Petrovs