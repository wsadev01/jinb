import axios from 'axios';
const repositoryInformation = {
	user: import.meta.env.VITE_github_user,
	name: import.meta.env.VITE_repository,
	branch: import.meta.env.branch ? import.meta.env.branch : "main",
	folder: import.meta.env.folder ? import.meta.env.folder : "entries",
};
console.log(repositoryInformation);
const repoInfoArray =  Object.values(repositoryInformation);
const baseURL = "https://raw.githubusercontent.com/"
const finalURL = `${baseURL}${repoInfoArray.join("/")}`;

const axiosInstance = axios.create({
		baseURL: finalURL,
    timeout: 10000, // Set the default timeout in milliseconds
    headers: {
        'Content-Type': 'text/x-markdown',
    },
});

export default axiosInstance;
