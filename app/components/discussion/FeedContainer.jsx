import Header from './Header'
import Card from './Card'
import ButtonLarge from '../buttons/ButtonLarge'
import Link from 'next/link'

export default function FeedContainer() {
  const posts = [
    {
      id: "1",
      title: "How I saved 10 Litres of Water a Day",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam eget justo commodo aliquet. Nulla facilisi. Donec euismod, est ac aliquam aliquet, nunc nisl aliquam nisl, eget semper odio nunc eget nibh. Donec in diam eget velit lacinia ultrices. Donec non nisl in arcu ultricies viverra. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt.",
      author: {
        name: "John Doe",
        uuid: "1234",
      },
      createdAt: "2021-09-23 09:00:00",
      likes: 50,
      comments: [
        {
          content: "I like this very much!",
          author: {
            name: "Jane Doe",
            uuid: "1235",
          },
          createdAt: "2021-09-25 11:00:00",
        },
        {
          content: "Very Informative :)",
          author: {
            name: "Jason Doe",
            uuid: "1236",
          },
          createdAt: "2021-09-25 11:00:00",
        }
      ]
    },
    {
      id: "2",
      title: "How I saved 50 Trees of Water a Day",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam eget justo commodo aliquet. Nulla facilisi. Donec euismod, est ac aliquam aliquet, nunc nisl aliquam nisl, eget semper odio nunc eget nibh. Donec in diam eget velit lacinia ultrices. Donec non nisl in arcu ultricies viverra. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt.",
      author: {
        name: "Jane Doe",
        uuid: "1234",
      },
      createdAt: "2021-09-23 09:00:00",
      likes: 50,
      comments: [
        {
          content: "Wow! This is amazing!",
          author: {
            name: "John Doe",
            uuid: "1235",
          },
          createdAt: "2021-09-25 11:00:00",
        },
        {
          content: "This is going to help me a lot!",
          author: {
            name: "Jason Doe",
            uuid: "1236",
          },
          createdAt: "2021-09-25 11:00:00",
        }
      ]
    },
    {
      id: "3",
      title: "How I saved 3 kittens Today",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam eget justo commodo aliquet. Nulla facilisi. Donec euismod, est ac aliquam aliquet, nunc nisl aliquam nisl, eget semper odio nunc eget nibh. Donec in diam eget velit lacinia ultrices. Donec non nisl in arcu ultricies viverra. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt. Sed vitae nunc eget nunc aliquam ultricies. Nulla facilisi. Sed id augue vitae velit fringilla tincidunt.",
      author: {
        name: "Jane Doe",
        uuid: "1234",
      },
      createdAt: "2021-09-23 09:00:00",
      likes: 30,
      comments: [
        {
          content: "Wow! This is amazing!",
          author: {
            name: "John Doe",
            uuid: "1235",
          },
          createdAt: "2021-09-25 11:00:00",
        },
        {
          content: "This is going to help me a lot!",
          author: {
            name: "Jason Doe",
            uuid: "1236",
          },
          createdAt: "2021-09-25 11:00:00",
        }
      ]
    },
  ]
  return (
    <div className='w-3/4 mx-auto rounded-2xl gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      <Header />
      <div className='flex justify-center items-center px-6 m-4'>
        <div className='text-2xl font-medium text-[#888]'>Recent Posts</div>
      </div>

      <div className='flex justify-center items-center px-6 mx-4'>
        <div className='border-t-2 border-[#e5e5e5] w-full'></div>
      </div>

      <div className='flex-1 mx-6 p-4 gap-4 rounded-xl flex flex-col flex-wrap'>
        {
          posts.map((post) => {
            return (
              <Link key={post.id} href={`/discussion/${post.id}`}>
              <Card post={post} />
              </Link>
            )
          }
          )
        }
      </div>

    </div>
  )
}