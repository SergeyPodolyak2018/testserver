const singlLogger = {
  logger: null,
  addLoger: function (logger) {
    this.logger = logger.getLogger('');
  },
};

class Logger {
  path = '';
  constructor(path) {
    this.path = path;
  }

  info(...message) {
    if (!singlLogger.logger) {
      console.info(...message);
    } else {
      singlLogger.logger.info(this.path, ...message);
    }
  }
  warn(...message) {
    if (!singlLogger.logger) {
      console.warn(...message);
    } else {
      singlLogger.logger.warn(this.path, ...message);
    }
  }
  error(...message) {
    if (!singlLogger.logger) {
      console.error(...message);
    } else {
      singlLogger.logger.error(this.path, ...message);
    }
  }
  debug(...message) {
    if (!singlLogger.logger) {
      console.debug(...message);
    } else {
      singlLogger.logger.debug(this.path, ...message);
    }
  }
  trace(...message) {
    if (!singlLogger.logger) {
      console.trace(...message);
    } else {
      singlLogger.logger.trace(this.path, ...message);
    }
  }
}

(async () => {
  const tempLogger = await import('logger');
  singlLogger.addLoger(tempLogger.default);
})();

module.exports = Logger;
