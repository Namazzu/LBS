import { getAllWorksIds, getWorkData } from '../../lib/works'

export default function Post({ workData }) {
	console.log({ workData })

	return (
		<div>
			{workData.title}
			<br />
			{workData.id}
			<br />
			{workData.date}
			<div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
		</div>
	)
}

export async function getStaticPaths() {
	const paths = getAllWorksIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const workData = await getWorkData(params.id)
	console.log('GETSTATICPROPS', workData)

	return {
		props: {
			workData,
		},
	}
}
