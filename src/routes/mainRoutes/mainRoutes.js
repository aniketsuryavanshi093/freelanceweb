import { lazy } from 'react';

export const guestRoutes = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: lazy(() => import('../../views/Login/Login'))
  },
  {
    path: '/create-profile',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() => import('../../views/signUp/createProfile/CreateProfile'))
  },

  {
    path: '/sign-up',
    name: 'SignUp-Details',
    exact: true,
    component: lazy(() => import('../../views/signUp/SignUp'))
  },
  {
    path: '/sign-up/:role',
    name: 'SignUp-Details',
    exact: true,
    component: lazy(() => import('../../views/signUp/joinAsFreelance/JoinAsFreelance'))
  },
  {
    redirectRoute: true,
    name: 'Login',
    path: '/login'
  }
];
export const createprofileclientroutes = [
  {
    path: '/clientstep',
    name: 'clientstep',
    exact: true,
    index: true,
    component: lazy(() => import('../../views/signUp/createProfile/ClientUserSetup'))
  },
  {
    redirectRoute: true,
    name: 'clientstep',
    path: '/clientstep'
  }
];
export const createprofileroutes = [
  {
    path: '/create-profile',
    name: 'CreateProfile2',
    exact: true,
    index: true,
    component: lazy(() => import('../../views/signUp/createProfile/CreateProfile'))
  },
  {
    path: 'step2',
    name: 'CreateProfile2',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep2')
    )
  },
  {
    path: 'step3',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep3/CreateUserStep3')
    )
  },
  {
    path: 'step4',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep4')
    )
  },
  {
    path: 'step5',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep5')
    )
  },
  {
    path: 'step6',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep6')
    )
  },
  {
    path: 'step7',
    name: 'CreateProfile',
    exact: true,
    component: lazy(() =>
      import('../../views/signUp/createProfile/CreateUserSteps/CreateUserStep7')
    )
  },
  {
    redirectRoute: true,
    name: 'CreateProfile',
    path: '/create-profile'
  }
];
export const userRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../../views/User/Home/Home'))
  },
  {
    path: '/profile',
    name: 'profile',
    exact: true,
    component: lazy(() => import('../../views/User/Profile/Profile'))
  },
  {
    redirectRoute: true,
    name: 'Home',
    path: '/'
  }
];

export const ClientRoutes = [
  {
    path: '/client',
    name: 'Client',
    exact: true,
    component: lazy(() => import('../../views/User/Home/Home'))
  },
  {
    path: '/client/createjob',
    name: 'CreateJob',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/CreateJob'))
  },
  {
    redirectRoute: true,
    name: 'Client',
    path: '/client'
  }
];
export const createjobroutes = [
  {
    path: '/createjob',
    name: 'createjob',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/index'))
  },
  {
    path: 'headline',
    name: 'headline',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/CreateJob'))
  },
  {
    path: 'scope',
    name: 'scope',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/JobScope'))
  },
  {
    path: 'budget',
    name: 'budget',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/JobBudget'))
  },
  {
    path: 'skills',
    name: 'skills',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/JobSkills'))
  },
  {
    path: 'finalstep',
    name: 'finalstep',
    exact: true,
    component: lazy(() => import('../../views/Client/CreateJob/FinalStep'))
  },
  {
    redirectRoute: true,
    name: 'Home',
    path: '/client'
  }
];
