import {binding, GeoPoint} from 'baqend';

declare module 'baqend' {

  interface baqend {
    Message: binding.EntityFactory<model.Message>;
  }

  namespace model {
    interface Device extends binding.Entity {
      deviceOs: string;
    }

    interface Role extends binding.Entity {
      name: string;
      users: Set<User>;
    }

    interface User extends binding.Entity {
      username: string;
      inactive: boolean;
    }

    interface Message extends binding.Entity {
      name: string;
      text: string;
      face: string;
    }

  }
}
