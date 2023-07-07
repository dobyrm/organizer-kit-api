import Router from 'express';
import calendarRoutes from './calendar/presentation/routes/routes.calendar'
import noteRoutes from './note/presentation/routes/routes.note'
import reminderRoutes from './reminder/presentation/routes/routes.reminder'
import taskRoutes from './task/presentation/routes/routes.task'
import timeTrackerRoutes from './time-tracker/presentation/routes/routes.timeTracker'

export const moduleRouters = Router();

moduleRouters.use(calendarRoutes);
moduleRouters.use(noteRoutes);
moduleRouters.use(reminderRoutes);
moduleRouters.use(taskRoutes);
moduleRouters.use(timeTrackerRoutes);
