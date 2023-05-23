import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    // <section
    //   id="get-started-today"
    //   className="relative overflow-hidden bg-blue-600 py-32"
    // >
    //   <Image
    //     className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    //     src={backgroundImage}
    //     alt=""
    //     width={2347}
    //     height={1244}
    //     unoptimized
    //   />
    //   <Container className="relative">
    //     <div className="mx-auto max-w-lg text-center">
    //       <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
    //         It&apos;s Free to Join the Club Today
    //       </h2>
    //       <p className="mt-4 text-lg tracking-tight text-white">
    //         Membership and educational events are free
    //       </p>
    //       <Button href="/register" color="white" className="mt-10">
    //         Join Now
    //       </Button>
    //     </div>
    //   </Container>
    // </section>
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Speakers Hall of Fame
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Check it out on Youtube or Rumble
          </p>
          <Button href="https://www.youtube.com/channel/UCkuo6XeC3PcV4ZmYuaZq3dg" color="white" className="mt-10 mx-10">
            Youtube
          </Button>
          <Button href="https://rumble.com/user/goodsamaritancapitalist" color="white" className="mt-10">
            Rumble
          </Button>
        </div>
      </Container>
    </section>
  )
}
