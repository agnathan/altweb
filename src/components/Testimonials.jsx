import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'Thanks for investing your time into building this community. What you have accomplished is truly impressive',
      author: {
        name: 'Alexander Shapiro',
        role: 'Club Member',
        image: avatarImage1,
      },
    },
    {
      content:
        'Thank you so much Daniel for running such a succesful initiative helping us all share the knowledge.The speakers you brought in were of high caliber and very knowledgeable.You will be greatly missed.All the best in future endeavors.Hope to stay connected.',
      author: {
        name: 'Gloria Velazquez',
        role: 'Club Member',
        image: avatarImage4,
      },
    },
    {
      content:
        'Thank you for being selfless in sharing your passion and knowledge with the rest of us.You opened the aperture for all us looking to establish passive income streams.Personally speaking, REIC meetings played a big role in getting me into the disipline of looking into possibilities every week',
      author: {
        name: 'Vasuki Chilukuri',
        role: 'Club Member',
        image: avatarImage5,
      },
    },
    {
      content:
        'Thank you so much for turning me on to the world of passive real estate investing.All of us in the Intel Real Estate Club owe you a debt of gratitude for your tireless efforts to educate and enlighten us on a weekly basis. I ave to say that there are two things I look forward to every Friday: Pat\'s weekly video and your REIC meeting! Take care and stay in touch! Best regards',
      author: {
        name: 'Brad Suessmith',
        role: 'Club Member',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Thank you for creating and leading an organization that has an impact of 100s even 1000s when considering the future decision to come. Your efforts have positively impacted the direction of my career and my family. I see why you selected Good Samaritan as a title for your endeavors because you are living what this means, particularly on helping a stranger. I look forward to continued partnership, and growing our relationship.',
      author: {
        name: 'Eugenio Walters',
        role: 'Club Member',
        image: avatarImage3,
      },
    },
    {
      content:
        'Thanks so much for creating this club and indoctrinating me into this great new world. I\'m ever grateful for your continual ear, advice, instruction, and friendship. I\'m glad we\'ve been able to do deals together, and look forward to more in the future. Thank you for bringing in such a diverse set of speakers and topics, and continuing to widen my aperature for investment acumen! Best of luck in the next adventure, and I\'m hopeful to be a part of it',
      author: {
        name: 'Glenn Cochran',
        role: 'Club Member',
        image: avatarImage4,
      },
    },
    {
      content:
        'Daniel, can\'t thank you enough for fostering REI quality learning within the company! Many times I find myself quoting what I\'ve learned through the club through you!',
      author: {
        name: 'Anonymous',
        role: 'Club Member',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Thank you for running the club! As a brand new real estate investor, I found the topics helpful in my learning journey.',
      author: {
        name: 'Ain Indermitte',
        role: 'Club Member',
        image: avatarImage1,
      },
    },
    {
      content:
        'Thank you so much Daniel for inviting me to the Real Estate meetings.They were informative and fun!',
      author: {
        name: 'Mary Kirkpatrick',
        role: 'Club Member',
        image: avatarImage1,
      },
    },
    {
      content:
        'I am so glad to have come across the REIC club, which helped me connect with you.You have a wealth of knowledge personally and unique connections that gave us the bigger picture to take action.Your passion for helping fellow Intel employees individually and through the experts in the field is commendable.You had a tremendous impact on my real estate learning journey.',
      author: {
        name: 'Gopal Gandikota',
        role: 'Club Member',
        image: avatarImage4,
      },
    },
    {
      content:
        'Daniel, thank you so much for running and starting this club.I have learned a lot! I even got introduced to our real estate agent through one of the presentations that helped my wife and I find and buy our first home together! You helped create a very valuable and inspirational community.Wish you all the best',
      author: {
        name: 'Caleb Fountain',
        role: 'Club Member',
        image: avatarImage1,
      },
    },
    {
      content:
        'Thank You Daniel for freely sharing your real estate expertise with all of us.It was a true blessing',
      author: {
        name: 'Mary Kirkpatrick',
        role: 'Club Member',
        image: avatarImage4,
      },
    },
  ],
]




function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Praised by our Members
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            The Alternative Investing Club, previously the Intel Real Estate Investment Club, has the goal of touching lives and empowering people to invest well to live and to give abundently
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        {/* <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div> */}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
