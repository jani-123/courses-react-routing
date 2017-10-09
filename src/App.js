import React, { Component } from 'react';
import TeacherList from './teacher.js';
import { CSSCourses, HTMLCourses, JSCourses } from './courses.js';
import './App.css';

import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	NavNavLink,
	Redirect
} from 'react-router-dom'

const Home = (props) => (
	<div className="main-content home">
		<h2>Front End Course Directory</h2>
		<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
		<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
		<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
		<hr />
	</div>
)

const About = () => (
	<div className="main-content about">
		<h2>About</h2>
		<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
	</div>
)
const Teachers = () => {
	return (
		<div className="main-content">
			<h2>Teachers</h2>
			<ul className="group">
				{
					TeacherList.map((item, index) => {
						return (
							<li className="teacher" key={index}>
								<img className="teacher-img" src={item.img_src} alt="teacher" />
								<h3>{item.name}</h3>
								<p>{item.bio}</p>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}
const Html = () => {
	return (
		HTMLCourses.map((item, index) => {
			return (
				<li className="course media group" key={index}>
					<img className="course-img" src={item.img_src} alt="course" />
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</li>
			)
		})
	)
}
const Css = () => {
	return (
		CSSCourses.map((item, index) => {
			return (
				<li className="course media group" key={index}>
					<img className="course-img" src={item.img_src} alt="course" />
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</li>
			)
		})
	)
}
const JavaScript = () => {
	return (
		JSCourses.map((item, index) => {
			return (
				<li className="course media group" key={index}>
					<img className="course-img" src={item.img_src} alt="course" />
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</li>
			)
		})
	)
}
const Courses = () => {
	return (
		<div className="main-content courses">
			<div className="course-header group">
				<h2>COURSES</h2>
				<ul className="course-nav">
					<li><NavLink exact to="/courses/html"> HTML </NavLink></li>
					<li><NavLink to="/courses/css"> CSS </NavLink> </li>
					<li><NavLink to="/courses/javascript"> JavaScript </NavLink> </li>
				</ul>
			</div>
			<div>
				<Switch>
					<Route exact path="/courses"
						render={() => <Redirect to="/courses/html" />} />
					<Route path="/courses/html" component={Html} />
					<Route path="/courses/css" component={Css} />
					<Route path="/courses/javascript" component={JavaScript} />
				</Switch>
			</div>
		</div>
	);
}

const App = () => (
	<BrowserRouter>
		<div data-reactor className="container">
			<header>
				<span className="icn-logo">
					<i className="material-icons">code</i>
				</span>
				<ul className="main-nav">
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/teachers">Teachers</NavLink></li>
					<li><NavLink to="/courses">Courses</NavLink></li>
				</ul>
			</header>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/teachers" component={Teachers} />
				<Route path="/courses" component={Courses} />
				<Route component={Home} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default App;
