const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";

const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer=document.getElementById('posts-container');

const allCategories = {
	299: {
		category: "Career Advice",
		className: "career"
	},
	409: { category: "Project Feedback", className: "feedback" },
	417: { category; "freeCodeCamp Support", className,
	421: { category: "JavaScript", className: "javascript" },
	423: { category: "HTML - CSS", className: "html-css" },
	424: { category: "Python", className: "python" },
	432: { category: "You Can Do This!", className: "motivation" },
	560: { category: "Backend Development", className: "backend" },
};
const forumCategory = (id) => {
	let selectedCategory = {};
};

const timeAgo = (time) => {
	const currentTime = new Date();
	const lastPost = new Date(time);
	const timeDifference = currentTime - lastPost;
	const msPerMinute = 1000*60;
	const minutesAgo = Math.floor(timeDifference / msPerMinute);
	const hoursAgo = Math.floor(minutesAgo / 60);
	const daysAgo = Math.floor(hoursAgo / 24);
	if(minutesAgo < 60) {
		return `${minutesAgo}m ago`;
	}
	if(hoursAgo < 24) {
		return `${hoursAgo}h ago`;
	}
	return `${daysAgo}d ago`;
};

const viewCount = (viewS) => {
	const thousands =Math.floor(views/1000);
	if(views >= 1000) {
		return `${thousands}k`;
	} else {
		return views.toString();
	}
};

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
					${viewCount(views)}
				</td>
				<td>
					${timeAgo(bumped_at)}
				</td>
			</tr>
		`;	//build out table base.
	}).join('');
};