/**
 * the search routes
 */

const Controller = require('./controller')
const consts = require('../../consts')

module.exports = {
  '/search/users': {
    post: {
      method: Controller.searchUsers,
      auth: 'jwt',
      access: consts.AdminUser,
      scopes: ['read:user', 'all:user']
    }
  },
  '/search/skills': {
    get: {
      method: Controller.searchSkills,
      auth: 'jwt',
      access: consts.AdminUser,
      scopes: ['create:userAttribute', 'all:userAttribute']
    }
  },
  '/search/userAttributes': {
    get: {
      method: Controller.searchAttributeValues,
      auth: 'jwt',
      access: consts.AdminUser,
      scopes: ['create:userAttribute', 'all:userAttribute']
    }
  },
  '/search/userAchievements': {
    get: {
      method: Controller.searchAchievementValues,
      auth: 'jwt',
      access: consts.AdminUser,
      scopes: ['create:userAttribute', 'all:userAttribute']
    }
  }
}
