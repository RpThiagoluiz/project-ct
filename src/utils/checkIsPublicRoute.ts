import { PUBLIC_ROUTES } from '../constants/publicRoutes';

/**
 * @param asPath string
 * @returns boolean
 *
 */

export const checkIsPublicRoute = (asPath: string): boolean =>
  PUBLIC_ROUTES.includes(asPath);
