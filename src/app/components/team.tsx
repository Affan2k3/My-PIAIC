import Link from 'next/link'
import Image from 'next/image'


const people = [
    {
        name: 'DR ARIF ALVI',
        role: 'President of Pakistan',
        imageUrl:
        'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/252295174_440869640730336_1528681316472898403_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z0rxxXpORIMAX8Xzo93&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfAAph8p7VymoLmySZxgxSgLDBufWR1zhGcyWIV1vhTpjw&oe=63F8AD2E',
    },
    {
        name: ' Zia Khan',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg',
    },
    {
      name: 'Hira Khan',
      role: 'Co-Founder of Penacloud',
      imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=2147483647&v=beta&t=Bwruo2OggLTrCos4804rppZq0UbhmXmPlr5LxDobq74',
    },
    {
        name: 'Daniyal Nagori',
        role: 'CEO of Penacloud',
        imageUrl:
          'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/332562357_2215063492008549_2931870112695435098_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=htuhnuIKGUYAX91aSwX&_nc_oc=AQnWlOpTZcMbVyL_iigz5onbq8oCe6ERqIfsYSe269Y_QYqWwrDWIGSwuDMLkGbcsIQ&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfDOeG24CVQginnA17VaR9fQtNnoSzgnLkP38AX00e7KsA&oe=63F880B2',
    },
    {
        name: 'Adil Altaf',
        role: 'CEO of Penaverse',
        imageUrl:
          'https://avatars.githubusercontent.com/u/62209503?v=4',
    },
    {
      name: 'Zeeshan Hanif',
      role: 'CEO of PIAIC',
      imageUrl:
        'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/332700096_2426379580858632_187873950243690785_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xR8CFdBEc6wAX8u7A6g&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfBrizieydG7WcDP7n8dxfYW_K8R7sq-epnO_HlcZK_a3g&oe=63F7E403',
  },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Skillful and  well experienced, having command on the programs | not only teaching, but also 
              mentoring the students for future challenges.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base uppercase font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  


