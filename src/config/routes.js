const routes = {
    home: '/',
    profile: '/@:nickname',
    courseDetail: '/course/:courseId',
    courseView: '/course/view/:id',
    courseViewSearch: '/course/view/:id',
    cart: '/cart',
    userMyCourse: '/user/my-courses',
    auth: '/auth',
    instructorPage: '/user/profile',
    createCourse: '/courses/create',
    editCourse: '/courses/edit/:courseID',
};

export default routes;
