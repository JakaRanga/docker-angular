FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["back/back.csproj", "back/"]
RUN dotnet restore "back/back.csproj"
COPY . .
WORKDIR "/src/back"
RUN dotnet build "back.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "back.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "back.dll"]