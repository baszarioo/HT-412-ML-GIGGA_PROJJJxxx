const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";

const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer=document.getElementById('posts-container');

const timeAgo = (time) => {};

const fetchData = async() => {
	try {
		const res = await fetch(forumLatest);
		const data = await res.json();
		console.log(data);
		showLatestPosts(data);
	} catch(err) {
		console.log(err);
	}
};
fetchData();

const showLatestPosts = (data) => {
	const { topic_list, users } = data;	// Destructure topics array from the topic_list object.
	const { topics } = topic_list;
	const postsContainer = document.getElementById('posts-container');
	//postsContainer.innerHTML = topics.map((item) => {}).join('');
	postsContainer.innerHTML = topics.map((item) => {
		const {
			id,
			title,
			views,
			posts_count,
			slug,
			posters,
			category_id,
			bumped_at,
		} = item;
		return `
			<tr>
				<td>
					<p class="post-title">${title}</p>
				</td>
				<td></td>
				<td>
					${posts_count - 1}
				</td>
				<td>
					${views}
				</td>
				<td></td>
			</tr>
		`;	//build out table base.
	}).join('');
};