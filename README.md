一个通用模板

### 1. 自动读取配置信息

@nest/config（dotenv） 通过.env来实现。（一般项目够的）

如果需要自定义配置（比如缩进），可以使用YAML来查看

通过js-yaml这个库实现。具体实现方式请参考（https://nestjs.bootcss.com/techniques/configuration.html）

### 2. 全局异常处理

通过全局的useGlobalFilters来实现，对异常处理的封装。如果需要主动抛出异常，只需要在具体逻辑中throw new BadRequestException(errorMessages);
当然这个BadRequestException可以自己定义。

通过app.useGlobalFilters(new AllExceptionsFilter());

接口成功请求返回数据，我也希望有一个全局的统一处理，可以通过拦截器，统一加上code，以及时间戳。
app.useGlobalInterceptors(new ResponseInterceptor());

### 3. 日志系统

使用winston来记录到本地logs中，使用的时候，第二个参数传this，可以输出模块名字
this.log.log('第一次', this);如果不传，则默认为application

系统的默认日志，还是用@nest/config输出

### 4. 数据库连接

已完成

### 5. 鉴权系统

已完成

### 6.参数校验

通过管道来实现

### 7.swagger文档
