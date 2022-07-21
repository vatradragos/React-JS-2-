import React from 'react';
import './CardsTears.css';
import CardItem from './CardItemTears';

function CardsTears() {
  return (
    <div className='cards'>
      <h1>Below you can read six true stories about the dramas of six children</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tears-img-1.jpg'
              text='One year on from the Beirut explosions and two years into the COVID-19 pandemic,
               Lebanon is on the brink of collapse. While the sustained economic and political crisis has affected all areas of life,
                the lack of education options for young people is fueling a new era of hopelessness.
                 That’s unless you’re 11-year old Bayan. Disability, exclusion, isolation - these are just road bumps on her journey…

                 At War Child we witness the resilience of children every day.
                  Yet, it doesn’t leave us any less gobsmacked when we come across a new superstar.
                   Since the day Bayan (11) was born, illness and misfortune have followed her about.
                    In her first days of life, she lost her hearing and, as a result, her ability to speak as well.

                    Growing up in a country plagued by an economic crisis and political unrest,
                     the chances to pursue her dreams were second to none.
                      Add her disability to the mix and she was quickly excluded from mainstream schooling options,
                       confined to her home throughout her childhood.'
              label='BAYAN - 11 years old'
              path='/tears'
            />
            <CardItem
              src='images/tears-img-2.jpg'
              text='The events refugees experience on their journeys to safety are distressing enough
               - yet the effects of violence, separation and fear continue once they find sanctuary.
                TeamUp is designed to support refugee children to process these experiences
                 - like Nelson who escaped brutal violence in DR Congo…
                 
                 Nelson (now 15) grew up in the midst of fear, violence and insecurity in DR Congo
                  - the scene of more than 20 years of internal armed conflict.
                   Nelson and his family escaped to safety in neighbouring Uganda after they were
                    targeted as part of a brutal attack by armed rebels.

                    Nelson’s father recalls the events of that night readily.
                     “It was two o’clock in the morning when rebels entered the local hospital and killed 50 people,
                     ” he recalls. “They then came our way with a letter - and it was clear they were looking for me.”'
              label='NELSON - 15 years old'
              path='/tears'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tears-img-3.jpg'
              text='“We heard a loud boom and suddenly we all had to get in the car very quickly.
               After two days in a traffic jam, we got out and walked.”
                Six-year-old Platon fled the war in Kyiv with his brother, sister and parents.
                 Now, the family are seeking shelter in an empty guesthouse in Romania. This is Platon’s story.
                 
                 It has only been three days since Platon was happy at home in Kyiv,
                  together with his parents, brother aged four and two-year-old sister.
                   In a matter of days, his whole world has turned upside down.
                    “We heard a loud boom that scared us all. It caused the car’s alarm to go off.
                     Mum and dad threw our suitcases in the car and we left."
                     
                     Once on the road, it soon became clear that fleeing across the border by car would not succeed.
                      Platon says: “There were a lot of cars on the road and we stood still for a long time.
                       Then, we had to walk to the border - it took forever. I got very, very cold.
                        I was allowed to put on dad’s coat, it almost came to the ground.”'
              label='PLATON - 6 years old'
              path='/tears'
            />
            <CardItem
              src='images/tears-img-4.jpg'
              text='Teacher, actor, doctor, astronaut - what does Alex (7) want to be when he grows up?
               “I want to be a soldier”, he says. “Then, we can win our land back.”
               
               Very soon, Alex will turn eight. Yet, due to the war in Ukraine,
                he has already lived through events that many adults will not have to experience in their lifetime.
                 When the war came to his city he fled the country with his mother and older sister.
                  There were aid raid alarms for hours on end and rockets and bombs flying into buildings.
                   Since then the violence only got worse.

                    After a long journey, the family was put up in a private home in a village in Moldova.
                     Here, they joined over four million refugees seeking refuge in neighbouring countries.'
              label='ALEX - 7 years old'
              path='/tears'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tears-img-5.jpg'
              text='Sanaa hadn’t ever attended school. When her mother found out about the “Back to the Future” project,
               the 11-year-old was one phone call away from being registered in BLN (Basic Literacy and Numeracy)
                program at Terre des Hommes Italy center in Mount Lebanon.
                
                Impacted by the Syrian Crisis like many other families,
                 Sanaa (Alias name) and her mom arrived to Lebanon in 2015 and settled in Kayfoun.
                  For about a year now, she’s been learning English, Arabic and Math which is her favorite topic.

                    Shy, the single child benefits as well from the psychosocial support activities
                     provided under the “Back to the Future” program.
                      “The program has lots of things in it” affirms the mother as an indication of the richness of the material
                       her daughter is learning.
                       
                       “Nothing has changed”, claims the mom following the pandemic.
                        According to her, the teachers are saving no effort in delivering the lessons to Sanaa,
                         and her daughter is still receiving the needed support and follow up from them as if she were physically
                          attending her classes.'
              label='SANAA - 11 years old'
              path='/tears'
            />
            <CardItem
              src='images/tears-img-6.jpg'
              text='Following the end of a 12-year-long civil war in 2005,
               Burundi has continued to experience brutal human rights abuses and political unrest.
                Rogers family originally included his father, mother and seven siblings.
                 But after rebel’s raided their home in Burundi,
                  Roger and his parents found the other six children hanged in the barn.
                   They ran, unable to say goodbye or bury his siblings – eventually arriving in Uganda.
                   
                   In 2015, the re-election of the president and a failed army coup caused a series of armed conflicts.
                    Many Burundians fled in search of security.
                     Now, they find themselves in crowded refugee sites in neighbouring countries such as Tanzania and Uganda.
                      Much like Roger (15) and his parents…
                      
                      Some 100,000 refugees live in a camp in western Uganda.
                       Every week about 1,000 more arrive, mainly families seeking refuge from war and conflict in Congo,
                        South Sudan and Burundi. Roger is 15 years old and fled Burundi together with his parents.
                         A year on, they remain in Uganda.'
              label='ROGER - 15 years old'
              path='/tears'
            />
          </ul>
        </div>
      </div>
      <h1><a href='https://www.warchildholland.org/stories-of-children/' target='_blank' rel="noopener noreferrer">SOURCE</a></h1>
    </div>
  );
}

export default CardsTears;