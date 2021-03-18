import dynamic from 'next/dynamic'

const Browser = dynamic(() => import('../components/Browser'))

export default function Home() {    
    return (
      <div>
        <Browser />
      </div>
    )
}
