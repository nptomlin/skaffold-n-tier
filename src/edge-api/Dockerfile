FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app
# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore
# copy everything else and build app
COPY . .
# RUN dotnet publish -c Release -o out
RUN dotnet publish -c Debug -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /app
COPY --from=build /app/out ./
# RUN apt-get update
# RUN apt-get install unzip
# RUN curl -sSL https://aka.ms/getvsdbgsh | bash /dev/stdin -v vs2017u5 -l ./vsdbg

ENTRYPOINT ["dotnet", "edge-api.dll"]