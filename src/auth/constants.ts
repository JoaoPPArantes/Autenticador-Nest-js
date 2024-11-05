/* eslint-disable prettier/prettier */

import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
    secret: 'dasdasdsa1512d1sadsa',
  };

  
  export class AuthModule {}
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
